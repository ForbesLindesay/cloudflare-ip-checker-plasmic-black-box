// This is a skeleton starter React component generated by Plasmic.
// Feel free to edit as you see fit.
import * as React from 'react';
import {
  PlasmicInput__VariantsArgs,
  PlasmicInput,
} from './__internals__/cloudflare_ip_checker/PlasmicInput'; // plasmic-import: J0L08V-7zH/render

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  placeholder?: string;
  focusWithin?: PlasmicInput__VariantsArgs['focusWithin'];
  // className prop is required for positioning instances of
  // this Component
  className?: string;
  children?: never;
}

function Input({className, placeholder, ...inputProps}: InputProps) {
  const [focusWithin, setFocusWithin] = React.useState(false);
  return (
    <PlasmicInput
      variants={{
        focusWithin: focusWithin,
      }}
      args={{
        placeholder: placeholder,
      }}
      root={
        // className prop needs to be piped to the root element of this component
        {className: className}
      }
      input={{
        ...inputProps,
        style: {outline: 'none'},
        onFocus: () => setFocusWithin(true),
        onBlur: () => setFocusWithin(false),
      }}
    />
  );
}

export default Input;
