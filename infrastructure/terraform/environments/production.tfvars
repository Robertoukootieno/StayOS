# ============================================
# Production Environment Configuration
# ============================================

environment = "production"
aws_region  = "us-east-1"

# VPC Configuration
vpc_cidr             = "10.0.0.0/16"
private_subnet_cidrs = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
public_subnet_cidrs  = ["10.0.101.0/24", "10.0.102.0/24", "10.0.103.0/24"]

# EKS Configuration
kubernetes_version       = "1.28"
node_instance_types      = ["t3.xlarge"]
compute_instance_types   = ["c5.4xlarge"]
node_group_min_size      = 3
node_group_max_size      = 20
node_group_desired_size  = 5

# RDS Configuration
db_instance_class       = "db.r6g.2xlarge"
db_allocated_storage    = 500
db_max_allocated_storage = 2000

# ElastiCache Configuration
redis_node_type = "cache.r6g.xlarge"

# Tags
tags = {
  Environment = "production"
  CostCenter  = "engineering"
  Compliance  = "pci-dss"
}

