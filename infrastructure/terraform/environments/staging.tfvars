# ============================================
# Staging Environment Configuration
# ============================================

environment = "staging"
aws_region  = "us-east-1"

# VPC Configuration
vpc_cidr             = "10.1.0.0/16"
private_subnet_cidrs = ["10.1.1.0/24", "10.1.2.0/24", "10.1.3.0/24"]
public_subnet_cidrs  = ["10.1.101.0/24", "10.1.102.0/24", "10.1.103.0/24"]

# EKS Configuration
kubernetes_version       = "1.28"
node_instance_types      = ["t3.large"]
compute_instance_types   = ["c5.2xlarge"]
node_group_min_size      = 2
node_group_max_size      = 10
node_group_desired_size  = 3

# RDS Configuration
db_instance_class       = "db.t3.large"
db_allocated_storage    = 200
db_max_allocated_storage = 500

# ElastiCache Configuration
redis_node_type = "cache.t3.medium"

# Tags
tags = {
  Environment = "staging"
  CostCenter  = "engineering"
}

