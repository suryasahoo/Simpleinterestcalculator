function calculateInterest() {
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const time = parseFloat(document.getElementById("time").value);

    const interest = (principal * rate * time) / 100;
    const totalAmount = principal + interest;

    const resultElement = document.getElementById("result");

    resultElement.innerHTML = `
    <p>Principal Amount: $${principal}</p>
    <p> Interest Rate: ${rate}%</p>
    <p>Time: ${time} years</p>
    <p>Interest: $${interest.toFixed(2)}</p>
    <p>Total Amount: $${totalAmount.toFixed(2)}</p>
    `;
}