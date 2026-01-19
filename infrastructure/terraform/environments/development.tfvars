# ============================================
# Development Environment Configuration
# ============================================

environment = "development"
aws_region  = "us-east-1"

# VPC Configuration
vpc_cidr             = "10.2.0.0/16"
private_subnet_cidrs = ["10.2.1.0/24", "10.2.2.0/24", "10.2.3.0/24"]
public_subnet_cidrs  = ["10.2.101.0/24", "10.2.102.0/24", "10.2.103.0/24"]

# EKS Configuration
kubernetes_version       = "1.28"
node_instance_types      = ["t3.medium"]
compute_instance_types   = ["c5.xlarge"]
node_group_min_size      = 1
node_group_max_size      = 5
node_group_desired_size  = 2

# RDS Configuration
db_instance_class       = "db.t3.medium"
db_allocated_storage    = 50
db_max_allocated_storage = 100

# ElastiCache Configuration
redis_node_type = "cache.t3.small"

# Tags
tags = {
  Environment = "development"
  CostCenter  = "engineering"
}

