
type Props = {
    size?: string;
    children: string;
}

export const MenuItem = ({children, size}: Props) => {
    
    const fontSize = size == 'big' ? '26px' : '16px'

    return (
        <div style={{
            fontSize
        }}>
            {children}
        </div>
    )
}