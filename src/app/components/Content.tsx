type Props = {
  children: React.ReactNode;
};

export function Content({ children }: Props) {
  return <main className="h-full">{children}</main>;
}
