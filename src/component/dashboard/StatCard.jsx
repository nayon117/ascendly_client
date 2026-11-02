import {StarFill} from '@gravity-ui/icons';


const StatCard = ({ stats = [] }) => {
  return (
    <div className="my-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats?.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.title}
            className="group relative overflow-hidden rounded-2xl border border-border bg-primary p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl hover:shadow-black/10 sm:p-6"
          >
            {/* Decorative glow */}
            <div className="pointer-events-none absolute -right-8 -top-8 size-28 rounded-full bg-accent/5 blur-3xl transition-all duration-300 group-hover:bg-accent/10" />

            {/* Card Header */}
            <div className="relative flex items-center justify-between">
              <p className="text-sm font-medium text-muted">
                {stat.title || "No title available"}
              </p>

              <div className="flex size-11 items-center justify-center rounded-xl border border-accent/10 bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
               { Icon && <Icon className="size-5" /> || <span className="text-sm font-medium text-accent"> <StarFill/> </span>}
              </div>
            </div>

            {/* Value */}
            <div className="relative mt-5">
              <h3 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {stat.value || "N/A"}
              </h3>

              {stat.description && (
                <p className="mt-2 text-xs text-muted">
                  {stat.description || "No description available"}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatCard;
