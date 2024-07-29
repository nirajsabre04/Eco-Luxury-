<?php
// phonepe_payment.php

$apiKey = 'd7307dc0-a788-493f-bd8d-6b11abe546ce';
$endpoint = 'https://api.phonepe.com/apis/hermes/pg/v1/pay'; // Replace with the actual PhonePe endpoint
// https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay
// Get POST data from the request
$data = json_decode(file_get_contents('php://input'), true);

// Check if data is received
if (!$data) {
    echo json_encode(['status' => 'error', 'message' => 'No data received']);
    exit;
}

// Prepare data for PhonePe API
$apiData = [
    'order_id' => $data['orderId'],
    'amount' => $data['amount'],
    'currency' => 'INR', // Adjust currency as needed
    'callback_url' => 'https://pujasamagri.online/payment_callback.php' // Your callback URL
];

// Create a signature
$signature = hash_hmac('sha256', json_encode($apiData), $apiKey);

// Add signature to data
$apiData['signature'] = $signature;

// Initialize cURL
$ch = curl_init($endpoint);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($apiData));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Authorization: Bearer ' . $apiKey
]);

// Execute request
$response = curl_exec($ch);
curl_close($ch);

// Output response
header('Content-Type: application/json');
echo $response;
?>
