# ============================================
# VPC Outputs
# ============================================
output "vpc_id" {
  description = "VPC ID"
  value       = module.vpc.vpc_id
}

output "vpc_cidr" {
  description = "VPC CIDR block"
  value       = module.vpc.vpc_cidr_block
}

output "private_subnet_ids" {
  description = "Private subnet IDs"
  value       = module.vpc.private_subnets
}

output "public_subnet_ids" {
  description = "Public subnet IDs"
  value       = module.vpc.public_subnets
}

# ============================================
# EKS Outputs
# ============================================
output "eks_cluster_id" {
  description = "EKS cluster ID"
  value       = module.eks.cluster_id
}

output "eks_cluster_endpoint" {
  description = "EKS cluster endpoint"
  value       = module.eks.cluster_endpoint
}

output "eks_cluster_security_group_id" {
  description = "EKS cluster security group ID"
  value       = module.eks.cluster_security_group_id
}

output "eks_cluster_certificate_authority_data" {
  description = "EKS cluster certificate authority data"
  value       = module.eks.cluster_certificate_authority_data
  sensitive   = true
}

output "eks_cluster_oidc_issuer_url" {
  description = "EKS cluster OIDC issuer URL"
  value       = module.eks.cluster_oidc_issuer_url
}

# ============================================
# RDS Outputs
# ============================================
output "rds_endpoint" {
  description = "RDS endpoint"
  value       = module.rds.db_instance_endpoint
}

output "rds_address" {
  description = "RDS address"
  value       = module.rds.db_instance_address
}

output "rds_port" {
  description = "RDS port"
  value       = module.rds.db_instance_port
}

output "rds_database_name" {
  description = "RDS database name"
  value       = module.rds.db_instance_name
}

# ============================================
# ElastiCache Outputs
# ============================================
output "redis_endpoint" {
  description = "Redis endpoint"
  value       = module.redis.cluster_address
}

output "redis_port" {
  description = "Redis port"
  value       = module.redis.cluster_port
}

# ============================================
# S3 Outputs
# ============================================
output "s3_storage_bucket_id" {
  description = "S3 storage bucket ID"
  value       = module.s3_storage.s3_bucket_id
}

output "s3_storage_bucket_arn" {
  description = "S3 storage bucket ARN"
  value       = module.s3_storage.s3_bucket_arn
}

# ============================================
# KMS Outputs
# ============================================
output "eks_kms_key_id" {
  description = "EKS KMS key ID"
  value       = aws_kms_key.eks.key_id
}

output "rds_kms_key_id" {
  description = "RDS KMS key ID"
  value       = aws_kms_key.rds.key_id
}

# ============================================
# Connection Strings (Sensitive)
# ============================================
output "database_connection_string" {
  description = "Database connection string"
  value       = "postgresql://${module.rds.db_instance_username}@${module.rds.db_instance_endpoint}/${module.rds.db_instance_name}"
  sensitive   = true
}

output "redis_connection_string" {
  description = "Redis connection string"
  value       = "redis://${module.redis.cluster_address}:${module.redis.cluster_port}"
  sensitive   = true
}

