const paginate = (items: any, page = 1, perPage = 10) => {
  const offset = perPage * (page - 1);
  const paginatedItems = items.slice(offset, perPage * page);

  return {
      data: paginatedItems,
      total: items.length,
  };
};

export { paginate };
