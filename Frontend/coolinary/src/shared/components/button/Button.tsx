import "./Button.scss";

type Props = React.ComponentProps<"button"> & {
  variant: "primary" | "secondary";
};

let className: "primary-button" | "secondary-button" | "" = "";

export const Button = ({ variant, ...props }: Props) => {
  className = variant === "primary" ? "primary-button" : "secondary-button";

  return <button className={className} {...props} />;
};
