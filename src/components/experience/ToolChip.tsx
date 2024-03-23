interface ToolChipProps {
    tool: string;
}

export const ToolChip = ({ tool }: ToolChipProps) => {
    return (
        <div className="bg-principal-150 mr-2 mt-2 text-principal-100 text-sm px-3 py-1 border rounded-full border-none">
            {tool}
        </div>
    )
}
