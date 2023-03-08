type LayoutProps = {
  header: ReactNode;
  page: ReactNode;
  footer: ReactNode;
};

export const Layout = ({ header, footer, page }: LayoutProps) => {
  return (
    <div>
      {header}
      <div>
        <div>{page}</div>
      </div>
      {footer}
    </div>
  );
};
