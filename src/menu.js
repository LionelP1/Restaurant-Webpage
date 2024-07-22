export default function createMenuPage() {
    const content = document.createElement('div');
    content.innerHTML = `
        <h1>Menu</h1>
        <ul>
            <li>Margherita Pizza - $12</li>
            <li>Pepperoni Pizza - $15</li>
            <li>Vegetarian Pizza - $14</li>
            <li>BBQ Chicken Pizza - $16</li>
        </ul>
    `;
    return content;
}