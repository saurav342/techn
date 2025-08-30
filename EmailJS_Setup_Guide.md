# EmailJS Setup Guide for Techinium Contact Form

## Overview
The Project Inquiry form has been implemented with EmailJS to send emails to `hello@techinium.com`. Follow these steps to configure EmailJS for your project.

## Step 1: Create EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Configure with your email credentials
5. Note down the **Service ID** (e.g., `service_1x5j9ks`)

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Project Inquiry from {{from_name}} - {{from_company}}

Hello Techinium Team,

You have received a new project inquiry through your website.

**Contact Details:**
- Name: {{from_name}}
- Company: {{from_company}}
- Email: {{from_email}}
- Phone: {{phone}}

**Project Information:**
- Project Type: {{project_type}}
- Details: {{message}}

**Email sent to:** {{to_email}}

Best regards,
Techinium Contact Form
```

4. Save the template and note the **Template ID** (e.g., `template_xyz123`)

## Step 4: Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (e.g., `your_public_key`)

## Step 5: Update Configuration
Replace the placeholder values in `/src/TechiniumLanding.jsx` around line 340:

```javascript
await emailjs.send(
  'service_1x5j9ks',    // Replace with your Service ID
  'template_xyz123',    // Replace with your Template ID
  {
    from_name: formData.name,
    from_company: formData.company,
    from_email: formData.email,
    phone: formData.phone,
    project_type: formData.projectType,
    message: formData.projectDetails,
    to_email: 'hello@techinium.com'
  },
  'your_public_key'     // Replace with your Public Key
);
```

## Step 6: Test the Form
1. Start your development server: `npm start`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your `hello@techinium.com` inbox for the test email

## Features Implemented
✅ **Form Validation**: Required fields are validated
✅ **Loading State**: Button shows "Sending..." during submission
✅ **Success Message**: Green confirmation when email is sent
✅ **Error Handling**: Red error message if submission fails
✅ **Form Reset**: Form clears after successful submission
✅ **Responsive Design**: Works on all device sizes

## EmailJS Limits
- **Free Plan**: 200 emails/month
- **Paid Plans**: Higher limits available
- All emails are sent through EmailJS servers

## Security Notes
- Public key is safe to expose in frontend code
- Private credentials are stored securely with EmailJS
- Form data is sent directly to your configured email

## Troubleshooting
- Ensure your EmailJS service is active
- Check browser console for error messages
- Verify template variable names match the code
- Test with a simple template first

## Alternative Solutions
If you prefer other email services:
- **Formspree**: Simple form handling service
- **Netlify Forms**: Built-in form handling (if using Netlify)
- **Custom Backend**: Node.js with Nodemailer
- **SendGrid API**: Professional email service

---

**Next Steps:**
1. Set up your EmailJS account
2. Replace the placeholder IDs in the code
3. Test the form functionality
4. Monitor email delivery in your EmailJS dashboard