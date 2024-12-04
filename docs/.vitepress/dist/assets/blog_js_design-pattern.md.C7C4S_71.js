import{_ as a,c as e,o as r,a4 as i}from"./chunks/framework.DwILdc5J.js";const q=JSON.parse('{"title":"设计模式","description":"","frontmatter":{},"headers":[],"relativePath":"blog/js/design-pattern.md","filePath":"blog/js/design-pattern.md"}'),t={name:"blog/js/design-pattern.md"},o=i('<h1 id="设计模式" tabindex="-1">设计模式 <a class="header-anchor" href="#设计模式" aria-label="Permalink to &quot;设计模式&quot;">​</a></h1><p>设计模式可以帮助开发人员更快地解决常见的设计问题，并且可以提高代码的可读性和可维护性。它们能够帮助开发者编写出更加模块化、可重用和易于维护的代码。</p><p>选择合适的设计模式需要根据项目的具体需求来定，过度设计或不恰当的应用模式可能会导致代码复杂度增加。</p><h2 id="solid-原则" tabindex="-1">SOLID 原则 <a class="header-anchor" href="#solid-原则" aria-label="Permalink to &quot;SOLID 原则&quot;">​</a></h2><p>SOLID 是五个首字母缩写的组合，分别代表：</p><ul><li>单一职责原则（Single Responsibility Principle, SRP）</li><li>开闭原则（Open/Closed Principle, OCP）</li><li>里氏替换原则（Liskov Substitution Principle, LSP）</li><li>接口隔离原则（Interface Segregation Principle, ISP）</li><li>依赖倒置原则（Dependency Inversion Principle, DIP）</li></ul><h3 id="单一职责原则" tabindex="-1">单一职责原则 <a class="header-anchor" href="#单一职责原则" aria-label="Permalink to &quot;单一职责原则&quot;">​</a></h3><p>一个类应该只负责一个功能领域，不应该承担多个不相关的职责。这样可以使类更加专注，更容易理解和维护。</p><h3 id="开闭原则" tabindex="-1">开闭原则 <a class="header-anchor" href="#开闭原则" aria-label="Permalink to &quot;开闭原则&quot;">​</a></h3><p>在不修改现有代码的情况下，通过增加新的代码来扩展系统的功能。这可以通过多态和抽象类来实现。</p><h3 id="里氏替换原则" tabindex="-1">里氏替换原则 <a class="header-anchor" href="#里氏替换原则" aria-label="Permalink to &quot;里氏替换原则&quot;">​</a></h3><p>子类应该能够无缝地替换基类，而不会影响程序的正确性。这意味着子类应该能够完全实现基类的行为。</p><h3 id="接口隔离原则" tabindex="-1">接口隔离原则 <a class="header-anchor" href="#接口隔离原则" aria-label="Permalink to &quot;接口隔离原则&quot;">​</a></h3><p>接口应该尽可能小和具体，而不是大而全。这样可以避免客户端被迫实现不必要的方法。</p><h3 id="依赖倒置原则" tabindex="-1">依赖倒置原则 <a class="header-anchor" href="#依赖倒置原则" aria-label="Permalink to &quot;依赖倒置原则&quot;">​</a></h3><p>高层模块不应该依赖于低层模块，二者都应该依赖于抽象。抽象不应该依赖于细节，细节应该依赖于抽象。</p><h2 id="创建型模式" tabindex="-1">创建型模式 <a class="header-anchor" href="#创建型模式" aria-label="Permalink to &quot;创建型模式&quot;">​</a></h2><p>创建型模式与对象的创建有关，它们试图以一种适合特定情况的方式来创建对象。</p><h3 id="单例模式" tabindex="-1">单例模式 <a class="header-anchor" href="#单例模式" aria-label="Permalink to &quot;单例模式&quot;">​</a></h3><p>确保一个类只有一个实例，并提供一个全局访问点。</p><h3 id="简单工厂模式" tabindex="-1">简单工厂模式 <a class="header-anchor" href="#简单工厂模式" aria-label="Permalink to &quot;简单工厂模式&quot;">​</a></h3><p>提供一个创建对象的静态方法，根据传入的参数返回不同的对象实例。</p><h3 id="工厂方法模式" tabindex="-1">工厂方法模式 <a class="header-anchor" href="#工厂方法模式" aria-label="Permalink to &quot;工厂方法模式&quot;">​</a></h3><p>定义一个用于创建对象的接口，让子类决定实例化哪一个类。</p><h3 id="抽象工厂模式" tabindex="-1">抽象工厂模式 <a class="header-anchor" href="#抽象工厂模式" aria-label="Permalink to &quot;抽象工厂模式&quot;">​</a></h3><p>提供一个创建一系列相关或相互依赖对象的接口，而无需指定它们具体的类。</p><h2 id="结构型模式" tabindex="-1">结构型模式 <a class="header-anchor" href="#结构型模式" aria-label="Permalink to &quot;结构型模式&quot;">​</a></h2><p>结构型模式处理类或对象的组合。这些模式有助于设计简单灵活的接口。</p><h3 id="装饰模式" tabindex="-1">装饰模式 <a class="header-anchor" href="#装饰模式" aria-label="Permalink to &quot;装饰模式&quot;">​</a></h3><p>动态地给一个对象添加一些额外的职责。</p><h3 id="适配器模式" tabindex="-1">适配器模式 <a class="header-anchor" href="#适配器模式" aria-label="Permalink to &quot;适配器模式&quot;">​</a></h3><p>允许不兼容的接口一起工作。</p><h3 id="代理模式" tabindex="-1">代理模式 <a class="header-anchor" href="#代理模式" aria-label="Permalink to &quot;代理模式&quot;">​</a></h3><p>为其他对象提供一个代理以控制对这个对象的访问。</p><h2 id="行为型模式" tabindex="-1">行为型模式 <a class="header-anchor" href="#行为型模式" aria-label="Permalink to &quot;行为型模式&quot;">​</a></h2><p>行为型模式关注于对象之间的通信。它们用于管理算法、关系和责任。</p><h3 id="观察者模式" tabindex="-1">观察者模式 <a class="header-anchor" href="#观察者模式" aria-label="Permalink to &quot;观察者模式&quot;">​</a></h3><p>当对象的状态改变时，所有依赖于它的对象都会得到通知并自动更新。如 Vue 的响应式系统。</p><h3 id="发布订阅模式" tabindex="-1">发布订阅模式 <a class="header-anchor" href="#发布订阅模式" aria-label="Permalink to &quot;发布订阅模式&quot;">​</a></h3><p>发布者将消息发布到一个特定的频道，任何订阅了该频道的订阅者都会收到消息。如 Node.js 中的 <code>EventEmitter</code> 。</p><h3 id="模板模式" tabindex="-1">模板模式 <a class="header-anchor" href="#模板模式" aria-label="Permalink to &quot;模板模式&quot;">​</a></h3><p>模板模式定义了一个操作中的算法骨架，而将一些步骤延迟到子类中实现。模板方法使得子类可以在不改变算法结构的情况下重新定义算法的某些特定步骤。这是一种基于继承的设计模式，主要用于代码复用。</p><h3 id="策略模式" tabindex="-1">策略模式 <a class="header-anchor" href="#策略模式" aria-label="Permalink to &quot;策略模式&quot;">​</a></h3><p>定义一系列算法，把它们一个个封装起来，并且使它们可以互相替换。</p><h3 id="迭代器模式" tabindex="-1">迭代器模式 <a class="header-anchor" href="#迭代器模式" aria-label="Permalink to &quot;迭代器模式&quot;">​</a></h3><p>提供一种方法顺序访问一个聚合对象中的各个元素，而又不需要暴露该对象的内部表示。</p>',46),l=[o];function h(n,d,s,c,p,u){return r(),e("div",null,l)}const P=a(t,[["render",h]]);export{q as __pageData,P as default};