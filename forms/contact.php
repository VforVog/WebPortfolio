<?php

  // Replace contact@example.com with your real receiving email address
  $receiving_email_address = 'stelios_vogiatzis@hotmail.com';

  if( file_exists($php_email_form = '../assets/vendor/php-email-form/php-email-form.php' )) {
    include( $php_email_form );
  } else {
    die( 'Unable to load the "PHP Email Form" Library!');
  }

  $contact = new PHP_Email_Form;
  $contact->ajax = true;
  
  $contact->to = $receiving_email_address;
  $contact->from_name = $_POST['name'];
  $contact->from_email = $_POST['email'];
  $contact->subject = $_POST['subject'];

  // Uncomment below code if you want to use SMTP to send emails. You need to enter your correct SMTP credentials
  /*
  $contact->smtp = array(
    'host' => 'smtp-mail.outlook.com',
    'username' => 'stelios_vogiatzis@hotmail.com',
    'password' => 'pass',
    'port' => '587'
  );
  */

  $contact->add_message( $_POST['name'], 'From');
  $contact->add_message( $_POST['email'], 'Email');
  $contact->add_message( $_POST['message'], 'Message', 10);

  echo $contact->send();


            /* Recapchta Script  */

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get the form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Get the reCAPTCHA response from the form
    $recaptcha_response = $_POST['g-recaptcha-response'];

    // Your secret key (provided by Google reCAPTCHA)
    $secret_key = 'secret';

    // Verify the reCAPTCHA response with Google API
    $recaptcha_verify_url = 'https://www.google.com/recaptcha/api/siteverify';
    $response = file_get_contents($recaptcha_verify_url . "?secret=" . $secret_key . "&response=" . $recaptcha_response);
    $response_keys = json_decode($response);

    if (intval($response_keys->success) !== 1) {
        // If reCAPTCHA failed
        echo "Please verify that you're not a robot.";
    } else {
        // If reCAPTCHA passed, proceed to send the email
        $to = "stelios_vogiatzis@hotmail.com";  // Replace with your email
        $subject = "New message from contact form";
        $body = "Name: $name\nEmail: $email\nMessage: $message";
        $headers = "From: $email";

        if (mail($to, $subject, $body, $headers)) {
            echo "Thank you! Your message has been sent.";
        } else {
            echo "Oops! Something went wrong, please try again.";
        }
    }
}
?>
