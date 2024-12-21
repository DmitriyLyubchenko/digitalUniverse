interface IServiceColumnProps {
    icon: string;
    label: string;
    text: string;
  }

export default function ServiceColumn(props: IServiceColumnProps) {
    return (
        <>
            <div className="w-icon-panel w-icon-panel--md w-disable-decorator">
                <div className="w-icon-panel__inner background_3lr background background--dark w-state-has-background">
                    <div className="background-wrapper_RZ2" aria-hidden="true" data-background--hide="false" data-component="background" data-type="color" data-data-loaded="true">
                        <div className="background_2xT" style={{background:"rgba(255, 255, 255, 0.03)"}} data-role="placeholder" data-selection-container="true"></div>
                    </div>
                    <span className="iconElement_3D2 ui-icon_2oI w-icon ui-icon--light_HAb">
                        <img src={props.icon} className="" alt="icon"/>
                    </span>
                </div>
            </div>
            <p className="text_1k0 ui-heading w-heading ui-heading--light" data-component="text">
                <span className="w-text-block">
                    <span className="w-text-content">{props.label}</span>
                </span>
            </p>
            <p className="text_1k0 ui-text w-body ui-text--light" data-component="text">
                <span className="w-text-block">
                    <span className="w-text-content">
                        <span style={{color:"rgb(180,180,180)"}}>{props.text}</span>
                    </span>
                </span>
            </p>
        </>
    );
}