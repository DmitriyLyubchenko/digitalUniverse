interface IServiceColumnProps {
    icon: string;
    label: string;
    text: string;
  }

export default function ServiceColumn(props: IServiceColumnProps) {
    return (
        <>
            <div class="w-icon-panel w-icon-panel--md w-disable-decorator">
                <div class="w-icon-panel__inner background_3lr background background--dark w-state-has-background">
                    <div class="background-wrapper_RZ2" aria-hidden="true" data-background--hide="false" data-component="background" data-type="color" data-data-loaded="true">
                        <div class="background_2xT" style={{background:"rgba(255, 255, 255, 0.03)"}} data-role="placeholder" data-selection-container="true"></div>
                    </div>
                    <span class="iconElement_3D2 ui-icon_2oI w-icon ui-icon--light_HAb">
                        <img src={props.icon} class="" alt="icon"/>
                    </span>
                </div>
            </div>
            <p class="text_1k0 ui-heading w-heading ui-heading--light" data-component="text">
                <span class="w-text-block">
                    <span class="w-text-content">{props.label}</span>
                </span>
            </p>
            <p class="text_1k0 ui-text w-body ui-text--light" data-component="text">
                <span class="w-text-block">
                    <span class="w-text-content">
                        <span style={{color:"rgb(180,180,180)"}}>{props.text}</span>
                    </span>
                </span>
            </p>
        </>
    );
}