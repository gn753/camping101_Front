type LayoutProps = {
  header: ReactNode;
  main: ReactNode;
  footer: ReactNode;
};

export default function Layout({ header, footer, main }: LayoutProps) {
  return (
    <div>
      {header}
      <div>
        <div>{main}</div>
      </div>
      {footer}
    </div>
  );
}
