const checkbox_template = `
<fieldset>
    <template v-for="(option, index) in options">
        <label :key="index">
            <input
                type="checkbox"
                :name="name"
                :value="option.value"
                @change="updateValue"
            />{{ option.label }}
        </label>
    </template>
</fieldset>
`

const Checkbox = {
    template: checkbox_template,
    props: {
        options: { type: Array, required: true },
        name: { type: String, required: true },
    },
    setup(_, { emit }) {
        const values = Vue.ref([]);
        const updateValue = () => {
            if(event.target.checked) values.value.push(event.target.value)
            else values.value = values.value.filter(v => v !== event.target.value)
            // 親側で@checkbox="method"
            emit('checkbox', values.value)
        }
        return {
            values,
            updateValue
        }
    }
}