/**
 * AvailabilityBadge - Show hiring status
 * HR loves to see this!
 */
export default function AvailabilityBadge({ available = true }) {
    return (
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/50 border border-teal/20 backdrop-blur-sm">
            <span className="relative flex h-3 w-3">
                <span 
                    className={`absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping ${
                        available ? "bg-teal" : "bg-yellow-500"
                    }`}
                />
                <span 
                    className={`relative inline-flex h-3 w-3 rounded-full ${
                        available ? "bg-teal" : "bg-yellow-500"
                    }`}
                />
            </span>
            <span className="text-sm text-muted">
                {available ? "Available for hire" : "Currently employed"}
            </span>
        </div>
    );
}
