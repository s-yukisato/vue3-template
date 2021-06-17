const input_template = `
<input
    class="form-control"
    :type="type"
    :id="id"
    :name="name"
    :value="modelValue"
    :placeholder="placeholder"
    @input="$emit('update:modelValue', $event.target.value)"
/>
<label for="id">{{ labelText }}</label>
`

const Input = {
    template: input_template,
    props: {
        modelValue: { type: String },
        id: { type: String, required: true },
        type: { type: String, required: true },
        name: { type: String, required: true },
        placeholder: { type: String, required: false },
        labelText: { type: String }
    },
    emits: ['update:modelValue'],
};