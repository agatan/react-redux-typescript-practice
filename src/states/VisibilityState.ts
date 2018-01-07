export enum VisibilityFilter {
    ShowAll,
    ShowActive,
    ShowCompleted,
}

export default interface VisibilityState {
    filter: VisibilityFilter;
};
