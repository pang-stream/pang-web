import { ReactNode } from "react";

export interface SidebarExplorerItem {
    id: string;
    icon: ReactNode;
    isSelected: boolean;
    isClipped?: boolean;
    label: string;
    to: string
}

export interface SidebarProps {
    isClipped:boolean
}

export interface SidebarItemProps {
    isSelected: boolean;
}