import classNames from "classnames";
import "./Button.scss";

type Props = React.ComponentProps<"button"> & {
  variant: "primary" | "secondary";
};

export const Button = ({ variant, ...props }: Props) => {
  const buttonClassnames = classNames({
    "primary-button": variant === "primary",
    "secondary-button": variant === "secondary",
  });

  return <button className={buttonClassnames} {...props} />;
};
