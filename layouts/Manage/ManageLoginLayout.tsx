type LayoutProps = {
    header: ReactNode;
    main: ReactNode;
    footer: ReactNode;
};

export const ManageLoginLayout = ({header, main, footer}:LayoutProps) => {
    return <>
        {header}
        {main}
        {footer}
    </>
}