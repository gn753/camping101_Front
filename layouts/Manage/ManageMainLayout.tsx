type LayoutProps = {
    header: ReactNode;
    main: ReactNode;
    footer: ReactNode;
};

export const ManageMainLayout = ({header, main, footer}:LayoutProps) => {
    return <>
        {header}
        {main}
        {footer}
    </>
}