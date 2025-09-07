type Props = {
  children: React.ReactNode;
}

const BlogPostLayout = ({children}:Props) => {
  return (
    <>{children}</>
  )
}

export default BlogPostLayout;