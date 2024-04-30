const emailTemplate = ({ name, email, message }: { name: string, email: string, message: string }) => {
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>Contact Form Submission</title>
            <style>
            .container {
                width: 100%;
                height: 100%;
                padding: 20px;
                background-color: #f4f4f4;
            }
            .email {
                width: 80%;
                margin: 0 auto;
                background-color: #fff;
                padding: 20px;
            }
            .email-header {
                background-color: #333;
                color: #fff;
                padding: 20px;
                text-align: center;
            }
            .email-body {
                padding: 20px;
            }
            .email-footer {
                background-color: #333;
                color: #fff;
                padding: 20px;
                text-align: center;
            }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="email">
                    <div class="email-header">
                        <h1>Contact Form Submission</h1>
                    </div>
                    <div class="email-body
                    ">
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Message:</strong> ${message}</p>
                    </div>
                    <div class="email-footer">
                        <p>&copy; ${new Date().getFullYear()} enzofagundz</p>
                    </div>
                </div>
        </body>
    </html>
    `;
}

export default emailTemplate;