export default function createContactPage() {
    const content = document.createElement('div');
    content.innerHTML = `
        <h1>Contact Us</h1>
        <p>Phone: (123) 456-7890</p>
        <p>Email: info@pizzapalace.com</p>
        <p>Address: 123 Pizza St, Food City, Yumland</p>
    `;
    return content;
}