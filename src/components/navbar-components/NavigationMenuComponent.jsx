"use client";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { menuData } from "@/constants";

const NavigationMenuComponent = () => {
  return (
    <NavigationMenu delayDuration={0}>
      <NavigationMenuList>
        {Object.entries(menuData).map(([category, items]) => (
          <NavigationMenuItem key={category}>
            <NavigationMenuTrigger>{category}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 sm:w-[500px] sm:grid-cols-2 lg:w-[600px]">
                {items.map((item) => (
                  <ListItem
                    key={item.title}
                    title={item.title}
                    href={item.href}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationMenuComponent;

const ListItem = ({ className, title, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          href={href}
          className={cn(
            "group block select-none space-y-1 rounded-sm p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground relative",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none relative text-neutral-900 inline-block">
            <span className="relative">
              {title}
              <span className="absolute left-0 bottom-0 w-0 h-[0.5px] bg-black transition-all duration-300 group-hover:w-full origin-left"></span>
            </span>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
};
ListItem.displayName = "ListItem";
