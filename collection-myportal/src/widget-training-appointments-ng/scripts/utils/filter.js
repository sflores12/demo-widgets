export default function filter(config){
  const original = config.original.concat();
  const filtered = config.filtered.concat();
  const item = config.item;
  const name = config.name;
  const filters = config.filters;
  const comparator = config.comparator;
  let appointments = original;
  filters[name] = item;
  if(filters[comparator] && filters[name]) {
    appointments = filtered;
  }
  appointments = appointments.filter(function (appointment) {
    return typeof appointment.guests.find(function (guest) {
        if(filters[comparator] && item){
          return guest.id === item.id && guest.id === filters[comparator].id;
        } else if (filters[comparator]) {
          return guest.id === filters[comparator].id;
        } else if(item){
          return guest.id === item.id
        } else {
          return true;
        }
      }) !== 'undefined';
  });
  return appointments;
};