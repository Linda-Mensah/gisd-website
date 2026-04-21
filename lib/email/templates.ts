interface ApplicantEmailParams {
  firstName: string;
  lastName: string;
  selectedCourses: string[];
}

export const getApplicantEmailTemplate = ({
  firstName,
  lastName,
  selectedCourses,
}: ApplicantEmailParams) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #8B0012; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background-color: #f9f9f9; }
        .footer { padding: 20px; text-align: center; font-size: 12px; color: #666; }
        .course-list { background-color: white; padding: 15px; border-radius: 5px; margin-top: 10px; }
        .button { background-color: #8B0012; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Application Received</h1>
        </div>
        <div class="content">
          <h2>Dear ${firstName} ${lastName},</h2>
          <p>Thank you for submitting your application to the Ghana Institute of Social Democracy (GISD).</p>
          <p>We have received your application for the following courses:</p>
          <div class="course-list">
            <ul>
              ${selectedCourses.map((course) => `<li>${course}</li>`).join("")}
            </ul>
          </div>
          <p>Our admissions team will review your application and contact you within 5-7 business days with further instructions.</p>
          <p>If you have any questions, please don't hesitate to contact us at admissions@gisd.edu.gh</p>
          <br />
          <a href="https://gisd.edu.gh" class="button">Visit Our Website</a>
        </div>
        <div class="footer">
          <p>© ${new Date().getFullYear()} Ghana Institute of Social Democracy. All rights reserved.</p>
          <p>Accra, Ghana</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

export const getAdminEmailTemplate = (data: any) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #8B0012; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background-color: #f9f9f9; }
        .info-table { width: 100%; border-collapse: collapse; background-color: white; }
        .info-table td { padding: 10px; border: 1px solid #ddd; }
        .info-table td:first-child { font-weight: bold; width: 30%; background-color: #f0f0f0; }
        .footer { padding: 20px; text-align: center; font-size: 12px; color: #666; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Application Received</h1>
        </div>
        <div class="content">
          <h2>New GISD Application</h2>
          <p>A new application has been submitted through the website.</p>
          
          <h3>Personal Information</h3>
          <table class="info-table">
            <tr><td>First Name</td><td>${data.firstName}</td></tr>
            <tr><td>Last Name</td><td>${data.lastName}</td></tr>
            <tr><td>Town/City</td><td>${data.townCity}</td></tr>
            <tr><td>Region</td><td>${data.region}</td></tr>
            <tr><td>Country</td><td>${data.country}</td></tr>
            <tr><td>Phone</td><td>${data.phone}</td></tr>
            <tr><td>Email</td><td>${data.email}</td></tr>
          </table>
          
          <h3>Selected Courses</h3>
          <table class="info-table">
            ${data.selectedCourses.map((course: string) => `<tr><td>Course</td><td>${course}</td></tr>`).join("")}
          </table>
          
          <p>Please review this application in the admin dashboard.</p>
        </div>
        <div class="footer">
          <p>This is an automated message from GISD website.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};
