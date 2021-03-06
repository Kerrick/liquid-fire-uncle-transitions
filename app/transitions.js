export default function() {
  this.transition(
    this.debug(),
    this.fromRoute('uncle'),
    this.toRoute('parent.child'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.debug(),
    this.fromRoute('uncle'),
    this.toRoute('parent'),
    this.use('toUp'),
    this.reverse('toDown')
  );
  this.transition(
    this.debug(),
    this.fromRoute('parent.index'),
    this.toRoute('parent.child'),
    this.use('fade'),
    this.reverse('fade')
  );
}
