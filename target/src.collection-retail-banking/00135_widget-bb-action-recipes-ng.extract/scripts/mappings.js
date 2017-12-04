export class RecipeModel {
  constructor(o, specification, filter, actions) {
    this.id = o ? o.id : null;
    this.active = o ? o.active : true;
    this.specificationId = o ? o.specificationId : specification.id;
    this.specification = specification;
    this.filter = filter;
    this.actions = actions;
  }

  toApiModel() {
    return {
      id: this.id,
      name: this.specification.name,
      active: this.active,
      specificationId: this.specificationId,
      trigger: this.filter.toApiModel(),
      actions: this.actions.toApiModel(),
    };
  }
}

export class RecipeAction {
  constructor(actions, channels, defaultValue) {
    this.channelsConfig = channels;
    Object.keys(channels).forEach(channelKey => {
      this[channelKey] = this.parseAction(actions, channels[channelKey], defaultValue);
    });
  }

  /**
   * Constructs individual channel object
   * @inner
   */
  parseAction(actions, channel, defaultValue) {
    const action = actions.find(item => item.type === channel);
    if (action) {
      return {
        type: action.type,
        value: defaultValue,
      };
    }
    return null;
  }

  /*
   * Checks if at least one action is selected
   */
  isSelected() {
    return Object.keys(this.channelsConfig).some(key => this[key] && this[key].value);
  }

  toApiModel() {
    const actions = [];
    Object.keys(this.channelsConfig).forEach(key => {
      if (this[key] && this[key].value) {
        actions.push({ type: this[key].type });
      }
    });
    return actions;
  }
}
