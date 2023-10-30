import { Message } from "semantic-ui-react";

interface Props {
    errors: string[];
}

function ValidationError({errors}: Props) {
    return (
        <Message error>
            {errors && (
                <Message.List>
                    {errors.map((err: string, key: number) => (
                        <Message.Item key={key}>{err}</Message.Item>
                    ))}
                </Message.List>
            )}
        </Message>
    )
}

export default ValidationError
