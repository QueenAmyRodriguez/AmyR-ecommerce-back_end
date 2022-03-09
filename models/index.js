// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


// Categories have many Products
Category.hasMany(Product)

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});
;

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  as: 'products',
  through: 'product_tag',
  foreignKey: 'product_id'
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  as: 'tags',
  through: 'product_tag',
  foreignKey: 'tag_id'
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
