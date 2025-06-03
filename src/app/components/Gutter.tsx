type Props = {
  children?: React.ReactNode;
}

const Gutter = ({children}:Props) => {
  return (
    <div className="sm:px-16">{children}</div>
  )
}

export default Gutter;