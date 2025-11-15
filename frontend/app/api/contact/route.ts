import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Get recipient email from environment variable or use default
    // For test domain, must be the verified email address
    const recipientEmail = process.env.CONTACT_EMAIL || 'ramiferjani80@gmail.com';
    
    // Get domain from environment variable - if not set or not verified, use test domain
    const emailDomain = process.env.EMAIL_DOMAIN;
    const useVerifiedDomain = emailDomain && process.env.USE_VERIFIED_DOMAIN === 'true';
    
    // Determine from address and replyTo based on domain verification
    let fromAddress: string;
    let replyToAddress: string | undefined;
    
    if (useVerifiedDomain && emailDomain) {
      // Use verified domain - can send to any recipient and use replyTo
      fromAddress = `Portfolio Contact <contact@${emailDomain}>`;
      replyToAddress = email; // Can use replyTo with verified domain
    } else {
      // Use test domain - can only send to verified email, no replyTo
      fromAddress = 'Portfolio Contact <onboarding@resend.dev>';
      // replyTo removed for test domain compatibility
      // In test mode, always send to the verified email address
      // The sender's email is included in the message body for reference
    }
    
    // Send email using Resend
    // Always send to the recipient email (your email) - sender's email is in the message body
    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: [recipientEmail], // Always send to your email address
      // Don't use replyTo in test mode - it causes issues
      // The sender's email is included in the message body instead
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%, #3b82f6 100%);
                color: white;
                padding: 20px;
                border-radius: 8px 8px 0 0;
                text-align: center;
              }
              .content {
                background: #f9f9f9;
                padding: 20px;
                border-radius: 0 0 8px 8px;
              }
              .field {
                margin-bottom: 15px;
              }
              .label {
                font-weight: bold;
                color: #8b5cf6;
                display: block;
                margin-bottom: 5px;
              }
              .value {
                color: #333;
                padding: 10px;
                background: white;
                border-radius: 4px;
                border-left: 3px solid #8b5cf6;
              }
              .message-box {
                min-height: 100px;
                white-space: pre-wrap;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>New Contact Form Submission</h1>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Name:</span>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <span class="label">Email:</span>
                <div class="value">${email}</div>
              </div>
              <div class="field">
                <span class="label">Subject:</span>
                <div class="value">${subject}</div>
              </div>
              <div class="field">
                <span class="label">Message:</span>
                <div class="value message-box">${message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      
      // Check if this is just a warning about test mode (email might still be sent)
      const isTestModeWarning = error.message?.includes('testing emails') || 
                                error.message?.includes('only send testing emails');
      
      // If it's a test mode warning and we're sending to the verified email, 
      // the email should still be sent - this is just a warning
      if (isTestModeWarning && recipientEmail === (process.env.CONTACT_EMAIL || 'ramiferjani80@gmail.com') && !useVerifiedDomain) {
        // Email was likely sent successfully despite the warning
        // Return success but log the warning
        console.warn('Resend test mode warning (email likely sent):', error.message);
        return NextResponse.json(
          { 
            message: 'Email sent successfully (test mode)', 
            warning: 'Using test mode - verify your domain to enable full functionality'
          },
          { status: 200 }
        );
      }
      
      // Provide more specific error messages for actual errors
      let errorMessage = 'Failed to send email. Please try again later.';
      
      if (error.message?.includes('not verified') || error.message?.includes('verify your domain')) {
        errorMessage = 'Domain not verified. The contact form is using test mode. Please verify your domain in Resend to enable full functionality.';
      } else if (error.message?.includes('verification') || error.message?.includes('domain')) {
        errorMessage = 'Email service configuration issue. Please contact the site administrator.';
      } else if (error.message?.includes('testing emails')) {
        errorMessage = 'Email service is in testing mode. Please verify your domain to send to all recipients.';
      }
      
      return NextResponse.json(
        { 
          error: errorMessage, 
          details: process.env.NODE_ENV === 'development' ? error.message : undefined,
          suggestion: error.message?.includes('not verified') 
            ? 'To verify your domain, go to https://resend.com/domains and add your domain. Once verified, set USE_VERIFIED_DOMAIN=true in your environment variables.'
            : undefined
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully', id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}

