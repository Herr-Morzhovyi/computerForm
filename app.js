Vue.component('order-form', {
    data() {
        return {
            components: {
                cpu: '',
                gpu: '',
                ram: '',
                storage: '',
                motherboard: '',
                psu: ''
            },
            cpus: ['Intel i9', 'AMD Ryzen 9', 'Intel i7', 'AMD Ryzen 7'],
            gpus: ['NVIDIA RTX 3080', 'AMD Radeon RX 6800', 'NVIDIA RTX 3070', 'AMD Radeon RX 6700'],
            rams: ['16GB DDR4', '32GB DDR4', '64GB DDR4', '128GB DDR4'],
            storages: ['1TB SSD', '512GB SSD', '2TB HDD', '1TB HDD'],
            motherboards: ['ASUS ROG', 'MSI MPG', 'Gigabyte Aorus', 'ASRock Phantom'],
            psus: ['750W', '850W', '650W', '1000W']
        };
    },
    methods: {
        submitOrder() {
            alert('Order submitted: ' + JSON.stringify(this.components, null, 2));
        }
    },
    template: `
        <div>
            <h2>Computer Components Order Form</h2>
            <form @submit.prevent="submitOrder">
                <label for="cpu">CPU:</label>
                <select v-model="components.cpu" id="cpu">
                    <option v-for="cpu in cpus" :key="cpu" :value="cpu">{{ cpu }}</option>
                </select>
                
                <label for="gpu">GPU:</label>
                <select v-model="components.gpu" id="gpu">
                    <option v-for="gpu in gpus" :key="gpu" :value="gpu">{{ gpu }}</option>
                </select>
                
                <label for="ram">RAM:</label>
                <select v-model="components.ram" id="ram">
                    <option v-for="ram in rams" :key="ram" :value="ram">{{ ram }}</option>
                </select>
                
                <label for="storage">Storage:</label>
                <select v-model="components.storage" id="storage">
                    <option v-for="storage in storages" :key="storage" :value="storage">{{ storage }}</option>
                </select>
                
                <label for="motherboard">Motherboard:</label>
                <select v-model="components.motherboard" id="motherboard">
                    <option v-for="motherboard in motherboards" :key="motherboard" :value="motherboard">{{ motherboard }}</option>
                </select>
                
                <label for="psu">PSU:</label>
                <select v-model="components.psu" id="psu">
                    <option v-for="psu in psus" :key="psu" :value="psu">{{ psu }}</option>
                </select>
                
                <button type="submit">Submit Order</button>
            </form>
        </div>
    `
});

new Vue({
    el: '#app'
});