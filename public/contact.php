<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed."]);
    exit();
}

$data = json_decode(file_get_contents("php://input"), true);

$name = htmlspecialchars($data['name'] ?? '', ENT_QUOTES, 'UTF-8');
$email = filter_var($data['email'] ?? '', FILTER_SANITIZE_EMAIL);
$phone = htmlspecialchars($data['phone'] ?? '', ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars($data['message'] ?? '', ENT_QUOTES, 'UTF-8');

if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(["error" => "Name, email, and message are required."]);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid email address."]);
    exit();
}

$to = "contact@authorpublishinghub.com";
$subject = "New Contact Form Submission from " . $name;

$htmlBody = "
<div style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;'>
  <div style='background: linear-gradient(135deg, #1B1464, #8B2272); padding: 20px; border-radius: 12px 12px 0 0;'>
    <h1 style='color: #D4A843; margin: 0; font-size: 22px;'>New Contact Form Submission</h1>
    <p style='color: rgba(255,255,255,0.8); margin: 5px 0 0;'>Authors Publishing Hub Website</p>
  </div>
  <div style='background: #f9f9f9; padding: 24px; border: 1px solid #eee; border-radius: 0 0 12px 12px;'>
    <table style='width: 100%; border-collapse: collapse;'>
      <tr>
        <td style='padding: 10px 0; font-weight: bold; color: #1B1464; width: 100px;'>Name:</td>
        <td style='padding: 10px 0; color: #333;'>$name</td>
      </tr>
      <tr>
        <td style='padding: 10px 0; font-weight: bold; color: #1B1464;'>Email:</td>
        <td style='padding: 10px 0; color: #333;'><a href='mailto:$email' style='color: #8B2272;'>$email</a></td>
      </tr>
      <tr>
        <td style='padding: 10px 0; font-weight: bold; color: #1B1464;'>Phone:</td>
        <td style='padding: 10px 0; color: #333;'>" . ($phone ?: 'Not provided') . "</td>
      </tr>
    </table>
    <div style='margin-top: 16px; padding: 16px; background: white; border-radius: 8px; border-left: 4px solid #D4A843;'>
      <p style='font-weight: bold; color: #1B1464; margin: 0 0 8px;'>Message:</p>
      <p style='color: #555; line-height: 1.6; margin: 0; white-space: pre-wrap;'>$message</p>
    </div>
  </div>
</div>";

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: Authors Publishing Hub <contact@authorpublishinghub.com>\r\n";
$headers .= "Reply-To: $email\r\n";

if (mail($to, $subject, $htmlBody, $headers)) {
    echo json_encode(["success" => true]);
} else {
    http_response_code(500);
    echo json_encode(["error" => "Failed to send message. Please try again."]);
}
?>
