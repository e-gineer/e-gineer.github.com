---
layout: default
title: Cost allocation model for shared services
---

## Introduction

Earlier this year we conducted a review of the cost allocation model used to charge our local operating companies for support centre services like helpdesk, IT procurement, server management, etc. This post outlines the model we came up with and draws key principles for any agreement of this type.

The key is to keep everyone focused on costs, not on cost allocations. (Cost allocation just shifts costs around.) 

When allocating costs from a shared service, the key aims are:
1. Provide customers with transparency and control over cost drivers.
2. Provide flexibility over the way resources can be used, while keeping a single consistent allocation model.
3. Leave choice over resource allocation and daily control with the service provider.

The costs for a shared service can be divided into 2 components:
1. Infrastructure
2. People

## Infrastructure costs

Infrastructure costs should be completely separated from overheads and people costs. Examples of infrastructure include data transfer, rack space charges, outsourced server monitoring, etc. 

Each infrastructure item has a total cost, which must be divided among the customers according to an allocation model that best represents the cost driver.

> <em>Example: Allocation of Infrastructure Costs</em>
> 
> Data transfer into the data center for July cost $100. The allocation model for
> this infrastructure item is bytes transferred by each customer company. Foo
> Industries generated 75% of the traffic during July, while Bar Incorporated
> generated the remaining 25%. As such, the data transfer bill for Foo is $75 and
> Bar is $25. 
> 
> Racks for housing servers in the data center are depreciated at a rate of $50
> per month. Costs are distributed based on the number of servers used by each
> company. Foo has 10 servers in place, while Bar has 15. As such, Foo's rack
> charges is $20 for July while Bar pays $30.
> 
> Server monitoring is compulsory for data center servers and is charged at
> $200/server/month. This is billed directly to each company based on their
> servers in place so Foo pays $2000 and Bar pays $3000.
 
In the end, we have this equation to give the operating company cost for each
infrastructure item:
> ItemCostToCustomer = TotalCostOfItem x (CustomerUsage/TotalUsage)

## People costs

People in a shared service spend their time on 3 things: 1. Project work 2.
Ad-hoc tasks, maintenance and incident management 3. Managing other people

Each person working in a shared service has a specific cost. This will
typically include:
* Salary &amp; benefits
* Building and space costs
* Equipment costs

Time spent on project work and ad-hoc tasks can be directly allocated to
customers, but time spent on people management is harder to quantify. To solve
this problem, we calculate the cost of time spent on people management and
allocate it among all reports under the manager.

> *Example: Allocation of people costs*
> 
> Alice is the manager of the shared service and spends 100% of her time managing
> people. She does no direct project work and does not complete any ad-hoc tasks.
> Her cost, including salary, building and equipment costs, is $100. 
> 
> Alice has 5 direct reports, each of whom have 4 reports, giving a total of 25
> staff in her team. Alice's cost is divided evenly among all 25 reports, adding
> $4 to the cost of each person.
> 
> Alice has no time to allocate among customer companies (she's done no "real
> work" afterall). But, her cost is effectively distributed by the work completed
> for customers since it is allocated to staff who do "real work".
> 
> Bob reports to Alice. His cost, including salary, building and equipment was
> $80. With the management allocation from Alice, his cost is now $84. 
> 
> Bob spends 50% of his time on people management, 25% on projects and 25%
> resolving ad-hoc issues. Per the model, 50% of Bob's total cost of $84 is
> evenly distributed among his 4 reports ($42/4 = $10.50 each). The 25% project
> work ($21) and 25% ad-hoc work completed by Bill are billed to the customers
> directly. 
> 
> Chris reports to Bob and spends all his time on ad-hoc tasks. His cost,
> including salary, building and equipment was $60. With the management
> allocation from Alice and Bob, his cost is now $60 + $4 + $10.50 = $74.50. 
> 
> Of the ad-hoc tasks performed by Chris, 50% were done for Foo Industries and
> 50% were done for Bar Incorporated. As such, Chris's cost to Foo Industries is
> $37.25 and to Bar Incorporated is $37.25.

In summary, the allocation of people costs follows these principles:
1. All people costs are allocated and paid on an individual person basis. So, a company that uses 25% of Derek's time will pay 25% of Derek's cost. This is not the same as using 25% of total time spent by the shared service team and paying 25% of their total cost. For example, if we use resolved calls as the metric to determine ad-hoc time spent and include both L1 (average 300 calls) and L2 (average 50 calls) engineers in the cost calculation there is no potential reward for moving calls from L2 resolution to L1 resolution.
2. Time spent on people management (an rough estimate for each manager) is added to the cost of the people being managed. So, you are only charged for actual work being done but we recognise that part of the cost of using those resources is the management team in place. 
3. Time spent on project work is directly allocated and billed to the customer requesting the project. It's important to appropriately separate these tasks from ad-hoc time. This ensures that we can see the real cost of project activities and keeps ad-hoc tasks reasonably consistent in complexity (thus evenly cost distributed).
4. Time spent on ad-hoc tasks is assumed to be the remainder after calculating time spent on people management and time spent on projects.

## It's only a model 

As always, this model is an approximation of reality. It will never be perfect, nor should we aim for it to be perfect. It's important to remain pragmatic and remember that a lot of the small inconsistencies and errors will correct themselves. (Two slightly wrongs can make a right in this context.) 

You'll need to think about how to handle events like extended sick leave or annual leave.

The key is to remember to keep all cost drivers transparent and controllable. Try not to let generic buckets like "overheads" or "maintenance" creep into the model. 

## Conclusion

<a href="http://www.e-gineer.com/v2/blog/2007/08/CostAllocationModelForSharedServices.pdf"><img src="http://www.e-gineer.com/v2/blog/2007/08/CostAllocationModelForSharedServices.gif" style="float:right"/></a>

After 6 months use on a team of 25 people divided among 5 operating companies over 2 countries, we've found this to be a simple, flexible model that has given us unprecedented insight and high level of control over cost drivers. 

We're now dealing with the hard (and important) problem of seeking real process improvement and cost control rather than looking for temporary advantage by playing with cost allocations to get temporary local advantage.
