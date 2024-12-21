interface IWhyColumnProps {
    label: string;
    text: string;
  }

export default function WhyColumn(props: IWhyColumnProps) {
    return (
        <>
            <p className="text_1k0 ui-heroTitle w-hero-title ui-heroTitle--light" data-component="text">
                <span className="text-ui-brand-color">{props.label}</span>
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" width="3000px" height="33">
                <path d="M0 16.5 L3000 16.5"/>
            </svg>
            <p className="text_1k0 ui-small w-small ui-small--light" data-component="text">
                <span style={{color:"rgb(167,167,177)"}}>{props.text}</span>
            </p>
        </>
    );
}