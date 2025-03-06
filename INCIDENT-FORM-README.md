# Cheers Liquor Mart - Incident Report Form

This document provides instructions for setting up and using the digital incident report form for Cheers Liquor Mart.

## Features

- **Digital Incident Report Form** that matches the paper version
- **Multiple submission options**:
  - Print the form
  - Save as PDF
  - Email the form data
  - Submit online (requires Formspree configuration)
- **Mobile-friendly design** that works on all devices
- **Works on GitHub Pages** with no server-side code required

## Setting Up Online Form Submission

The form is designed to work with [Formspree](https://formspree.io/), a service that allows form submissions from static sites like GitHub Pages.

### Steps to Configure Formspree:

1. **Create a Formspree account**:
   - Go to [Formspree.io](https://formspree.io/) and sign up for a free account
   - The free tier allows up to 50 submissions per month

2. **Create a new form**:
   - Click "New Form" in your Formspree dashboard
   - Give your form a name (e.g., "Cheers Incident Reports")
   - Choose your email where submissions will be sent

3. **Get your form's unique endpoint**:
   - After creating the form, you'll get a unique endpoint like `https://formspree.io/f/xyyznpaa`
   - Copy this URL

4. **Update the HTML form**:
   - Open `incident-report.html`
   - Find the form tag: `<form id="incidentReportForm" action="https://formspree.io/f/your-formspree-id" method="POST">`
   - Replace `your-formspree-id` with your unique ID (just the code after the last slash, like `xyyznpaa`)

5. **Test the form**:
   - Submit a test incident report
   - You should receive the submission in your email

## Usage Options

The incident report form provides multiple ways to submit information:

### 1. Print Form

Click the "Print Form" button to print a physical copy. The form is formatted for printing on standard letter-size paper.

### 2. Email Form

Click the "Email Form" button to open your default email client with the form data pre-filled in the email body.

### 3. Save as PDF

Click the "Save as PDF" button to generate and download a PDF of the completed form.

### 4. Submit Online

After configuring Formspree, click the "Submit Online" button to send the form data directly to the designated email address.

## Data Privacy Considerations

- Form submissions through Formspree are transmitted via encrypted HTTPS
- Email submissions go through the user's own email client
- No form data is stored on the website itself
- Consider adding a privacy notice if collecting sensitive information

## Customization

You can customize the form by:

- Changing the recipient email in the Formspree settings
- Modifying the form fields in the HTML
- Adjusting the styling in the CSS section

## Troubleshooting

- If the "Submit Online" button shows an error about the Formspree ID, follow the instructions to configure Formspree properly
- If PDF generation doesn't work, make sure you have an internet connection as it requires loading the html2pdf.js library
- For printing issues, adjust your browser's print settings and margins
