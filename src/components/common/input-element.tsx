
export const InputElement = (props: { type, label, required?, name, className?, onChange, autoComplete?}) => {
  const { type = 'text', label, required, name, className, autoComplete } = props;

  const onChange = (e) => {
    if (props.onChange) {
      props.onChange(e.target.value);
    }
  }

  return (
    <div>
      <label htmlFor="name" className="block text-sm font-semibold leading-6 text-white">{label}</label>
      <div className="mt-1.5">
        {type === 'textarea'
          ?
          <textarea title={label} required={required} onChange={onChange} name={name} id={name} className={className} autoComplete={autoComplete} rows={5} />
          :
          <input title={label} type={type} required={required} onChange={onChange} name={name} id={name} className={className} autoComplete={autoComplete} />
        }
      </div>
    </div>
  );
};
