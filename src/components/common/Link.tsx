import type {ComponentType, FunctionComponent, JSX} from "preact";
import ArrowIcon from "../icons/ArrowIcon";

interface Props extends JSX.HTMLAttributes<HTMLAnchorElement>  {
    text: string;
    link: string;
    icon?: ComponentType<JSX.SVGAttributes<SVGSVGElement>>;
}
const Link: FunctionComponent<Props> = ({text, link, icon: Icon}) => {
    return <>
    <a className={"flex gap-3 py-0.5 items-center text-neutral-500 text-lg font-medium hover:pl-1.5 hover:text-neutral-300 duration-200"} href={link} target={"_blank"}>
        <ArrowIcon />
        <div class={"flex gap-2 items-center"}>
            {Icon && <Icon />}
            <span>{text}</span>
        </div>
    </a>
    </>;
};

export default Link;
