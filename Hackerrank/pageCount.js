function pageCount(n, p) {
  const pageTurns = Math.floor(p / 2);
  const totalPageTurns = Math.floor(n / 2);

  return Math.min(pageTurns, totalPageTurns - pageTurns);
  /*
    Input: n = # of pages / p = page to turn to
    -Page 1 will always be on the right side
    Ouput: The minimum turns it takes to get to (p)
    -Use Math.min to find the minimum of two values, the page turns(from first
      and last), and the total pages - page turns.
    */

}
