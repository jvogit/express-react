import React, { useState } from 'react';
import { Input } from 'baseui/input';
import { useStyletron } from 'baseui';
import { FormControl } from 'baseui/form-control';
import { Alert } from 'baseui/icon';

function Negative() {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        display: 'flex',
        alignItems: 'center',
        paddingRight: theme.sizing.scale500,
        color: theme.colors.negative400,
      })}
    >
      <Alert size="18px" />
    </div>
  );
}

interface Props {
  label: React.ReactNode;
  onValidate?: (input: string) => boolean;
  onChange?: (e: string) => void;
  errorMessage?: string | undefined;
  type?: string | undefined;
}

const ValidatedFormInput: React.FC<Props> = ({
  label,
  onValidate = () => true,
  onChange = () => { },
  errorMessage,
  type
}) => {
  const [error, setError] = useState(false);
  const [visited, setVisited] = useState(false);
  const isInvalid = visited && error;

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setError(!onValidate(e.currentTarget.value));
    onChange(e.currentTarget.value);
  }

  return (
    <FormControl
      label={label}
      error={
        isInvalid ? errorMessage : null
      }
    >
      <Input
        required
        type={type}
        onBlur={() => setVisited(true)}
        onChange={handleChange}
        error={isInvalid}
        overrides={isInvalid ? { After: Negative } : {}}
      />
    </FormControl>
  );
};

export default ValidatedFormInput;