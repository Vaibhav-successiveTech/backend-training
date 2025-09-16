# Aggregation
### Aggregation is a way to process data and transform documents in a MongoDB collection into meaningful results (like reports, stats, or summaries).

### Pipeline as a series of stages, like a flow:
Data → $match → $group → $sort → $project → Output

## $group
Purpose: Groups documents together (like SQL GROUP BY) and lets you calculate things like total, average, count, etc.

Use case: Total quantity sold per product.

## $match
Purpose: Filters data (like WHERE in SQL).

Use case: Only show products where total quantity > 10.
## $sort
Purpose: Sorts your results.

1 for ascending (A → Z), -1 for descending (Z → A).

## $project
Purpose: Select what fields to show or rename fields.

Use case: Only show product name and quantity.

## $unwind
Purpose: Breaks an array into separate documents (flattens).

Use case: To handle each item inside items: [ ] one by one.

## $sum
Purpose: Adds numbers (inside $group).

Use case: Add quantity of a product sold.

## $avg
Purpose: Calculates the average (inside $group).

Use case: Average order value per customer.

## $limit
Purpose: Limit number of results.



# Indexing

### What is an Index?
An index is like a table of contents for your MongoDB collections.
It helps MongoDB find data faster, instead of searching every document one by one.

### Why Use Indexes?
Without indexes:
MongoDB does a collection scan (checks every document).

This is slow, especially with lots of data.
With indexes:
MongoDB jumps directly to the required data.

Queries become faster and more efficient.

###  How to Create an Index

#### Single Field Index
db.orders.createIndex({ status: 1 })
status: the field you’re indexing

 1: for ascending order


#### Compound Index
db.orders.createIndex({ status: 1, orderDate: -1 })

#### Check Index Usage
db.orders.find({ status: "Pending" }).explain("executionStats")
#### LookUp
executionStats.totalKeysExamined

executionStats.totalDocsExamined


####  Drop an Index
db.orders.dropIndex({ status: 1 })