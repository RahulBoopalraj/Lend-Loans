function CondClass(base, cond, trueClass, falseClass) {
  return base + (cond ? " " + trueClass : " " + falseClass);
}

export { CondClass };
